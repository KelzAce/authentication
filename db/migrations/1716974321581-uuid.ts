import { MigrationInterface, QueryRunner } from "typeorm";

export class Uuid1716974321581 implements MigrationInterface {
    name = 'Uuid1716974321581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "PK_b54f8ea623b17094db7667d8206"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP CONSTRAINT "PK_b54f8ea623b17094db7667d8206"`);
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_entity" ADD CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id")`);
    }

}
