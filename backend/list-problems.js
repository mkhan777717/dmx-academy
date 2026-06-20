const prisma = require('./src/prisma');

async function main() {
  const problems = await prisma.problem.findMany({
    include: {
      testCases: true
    }
  });
  console.log("TOTAL PROBLEMS IN DB:", problems.length);
  console.log("PROBLEMS:");
  problems.forEach(p => {
    console.log(`- ID: ${p.id}, Title: "${p.title}", Slug: "${p.slug}", Difficulty: ${p.difficulty}`);
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
