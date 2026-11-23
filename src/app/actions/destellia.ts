"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

type CreateTutoringSessionResult =
  | { success: true }
  | { success: false; error: string };

function getFormString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function getScholarships() {
  return prisma.scholarship.findMany({
    where: { isActive: true },
    orderBy: {
      deadline: { sort: "asc", nulls: "last" },
    },
  });
}

export async function createTutoringSession(
  formData: FormData,
): Promise<CreateTutoringSessionResult> {
  const studentName = getFormString(formData, "studentName");
  const studentEmail = getFormString(formData, "studentEmail").toLowerCase();
  const grade = getFormString(formData, "grade");
  const requestedSubject = getFormString(formData, "subject").toLocaleLowerCase();
  const topic = getFormString(formData, "topic");
  const scheduledAtValue = getFormString(formData, "scheduledAt");
  const scheduledAt = new Date(scheduledAtValue);

  if (!studentName || !studentEmail || !grade || !topic || !scheduledAtValue) {
    return { success: false, error: "Completa todos los campos requeridos." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(studentEmail)) {
    return { success: false, error: "Ingresa un correo electrónico válido." };
  }

  const subjects: Record<string, string> = {
    "inglés": "Inglés",
    ingles: "Inglés",
    "matemáticas": "Matemáticas",
    matematicas: "Matemáticas",
    ciencias: "Ciencias",
    física: "Física",
    fisica: "Física",
    química: "Química",
    quimica: "Química",
    biología: "Biología",
    biologia: "Biología",
    español: "Español",
    espanol: "Español",
  };
  const subject = subjects[requestedSubject];

  if (!subject) {
    return {
      success: false,
      error: "Selecciona una materia disponible.",
    };
  }

  if (Number.isNaN(scheduledAt.getTime())) {
    return { success: false, error: "La fecha y hora no son válidas." };
  }

  try {
    await prisma.$transaction(async (transaction) => {
      const student = await transaction.user.upsert({
        where: { email: studentEmail },
        update: {},
        create: {
          name: studentName,
          email: studentEmail,
          grade,
          role: "STUDENT",
        },
        select: { id: true },
      });

      await transaction.tutoringSession.create({
        data: {
          studentId: student.id,
          subject,
          topic,
          scheduledAt,
          status: "PENDING",
        },
      });
    });
  } catch (error) {
    console.error("Failed to create tutoring session:", error);
    return {
      success: false,
      error: "No se pudo crear la sesión. Inténtalo de nuevo más tarde.",
    };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function getTutoringSessions() {
  return prisma.tutoringSession.findMany({
    include: { student: true },
    orderBy: { scheduledAt: "desc" },
  });
}
