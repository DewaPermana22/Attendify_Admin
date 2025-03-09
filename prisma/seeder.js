import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

const generateCode = (length = 5) => {
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += char.charAt(Math.floor(Math.random() * char.length));
    }
    return code;
}

const roles = ['Admin', 'Human Resource', 'IT Support', 'Finance', 'Marketing',
            'Asistant Manager', 'Manager', 'Supervisor', 'Team Leader',
            'Staff', 'Internship', 'Employee'];

const divisions = ['Software Development', 'Mobile Development', 'Sales', 'Production', 'Logistic', 'Quality Control',
                'Human Resource', 'Finance', 'Marketing', 'Customer Service', 'Operation','Research and Development',
                'Data Analyst','Purchasing', 'Warehouse', 'Administration', 'General Affair',
                'Graphic Designer', 'Accounting', 'Public Relation', 'Legal', 'Security', 'Driver', 'Cleaning Service'];

const departements = ['Technology Department', 'Sales and Marketing Department', 'Operations Department', ' Human Resources (HR) Department',
                    'Administration and General Affairs Department'];


async function main() {
    const encrypt = await bcrypt.hash("password789#$%&^{/", 10);

    for(let i = 0; i < 10; i++) {
        await prisma.referral_code.create({
            data : {code : generateCode()}
        })
    }

// create 10 roles
for (let i = 0; i < roles.length; i++) {
    await prisma.role.create({
        data : {
            name: roles[i],
        },
    });
}

// create 10 divisions
for (let i = 0; i < divisions.length; i++) {
    await prisma.division.create({
        data : {
            name: divisions[i],
        },
    });
}

// create 5 departements
for (let i = 0; i < departements.length; i++) {
    await prisma.department.create({
        data : {
            name: departements[i],
        },
    });
}


    const Divisions = await prisma.division.findMany();
    const Codereferral = await prisma.referral_code.findMany();
    const Roles = await prisma.role.findMany();
    const Departments = await prisma.department.findMany();

// create 10 users
for (let i = 0; i < 10; i++) {
    await prisma.users.create({
        data : {
            name: `user_${i}`,
            fullname: `esemka_user_${i}`,
            role_id: Roles[Math.floor(Math.random() * Roles.length)].id,
            department_id: Departments[Math.floor(Math.random() * Departments.length)].id,
            division_id: Divisions[Math.floor(Math.random() * Divisions.length)].id,
            referral_id: Codereferral[Math.floor(Math.random() * Codereferral.length)].id,
            email: `useresemka${i}@example.com`,
            password: encrypt,
        },
    });
}

    console.info('Added Seeder!')
}

main().catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})