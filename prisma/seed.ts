import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  const password = await bcrypt.hash('password123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password,
      invoices: {
        create: [
          {
            vendor_name: 'Vendor A',
            amount: 250.0,
            due_date: new Date('2025-06-01'),
            description: 'Invoice for services rendered',
            paid: false,
          },
          {
            vendor_name: 'Vendor B',
            amount: 450.0,
            due_date: new Date('2025-06-15'),
            description: 'Consulting invoice',
            paid: true,
          },
        ],
      },
    },
  });
  console.log({ user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
