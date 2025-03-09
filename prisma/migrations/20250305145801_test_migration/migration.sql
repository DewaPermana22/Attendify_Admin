-- CreateTable
CREATE TABLE `referral_code` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `referral_code_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `referral_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_referral_id_fkey` FOREIGN KEY (`referral_id`) REFERENCES `referral_code`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
