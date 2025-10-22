"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "../prisma";

const deleteProduct = async (formData: FormData) => {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");

  await prisma.product.deleteMany({
    where: { id: id, userId: user.id },
  });
};

export default deleteProduct;
