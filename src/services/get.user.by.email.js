import pkg from "@prisma/client";
const prisma = new pkg.PrismaClient();

export async function getUserByEmail(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.params.email,
      },
    });

    if (user) {
      return res.json(user);
    }
    return res.sendStatus(404);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      status: 500,
    });
  }
}
