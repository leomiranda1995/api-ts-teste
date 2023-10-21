import db from '../config/db';
import { ProfessionalModel } from '../models/ProfessionalModel';

class ProfessionalRepository {
  async findAll(): Promise<ProfessionalModel[]> {
    return db.many(`
      SELECT *
        FROM professionals
    `);
  }

  async findOne(id: string): Promise<ProfessionalModel | null> {
    return db.oneOrNone(`
      SELECT *
        FROM professionals
       WHERE id = $1
    `, [id]);
  }

  async create({
    name, email, password, activity, description, location, phone, base_price, payment_methods
  }: ProfessionalModel): Promise<ProfessionalModel> {
    return db.one(`
      INSERT INTO professionals
        (name, email, password, activity, description, location, phone, base_price, payment_methods)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `, [name, email, password, activity, description, location, phone, base_price, payment_methods]);
  }

  async update(id: string, {
    name, email, password, activity, description, location, phone, base_price, payment_methods
  }: ProfessionalModel): Promise<ProfessionalModel | null> {
    return db.oneOrNone(`
      UPDATE professionals
         SET name = $1,
             email = $2,
             password = $3,
             activity = $4,
             description = $5,
             location = $6,
             phone = $7,
             base_price = $8,
             payment_methods = $9
       WHERE id = $10
      RETURNING *
    `, [name, email, password, activity, description, location, phone, base_price, payment_methods, id]);
  }

  async delete(id: string): Promise<number> {
    return db.result(`
      DELETE
        FROM professionals
       WHERE id = $1
    `, id, (r) => r.rowCount);
  }
}

export default new ProfessionalRepository();
