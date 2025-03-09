/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `division` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[referral_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `department_name_key` ON `department`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `division_name_key` ON `division`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `role_name_key` ON `role`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `users_referral_id_key` ON `users`(`referral_id`);
