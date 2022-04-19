import pkg from "@prisma/client";
const prisma = new pkg.PrismaClient();

export async function createUser(req, res) {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      status: 500,
    });
  }
}
