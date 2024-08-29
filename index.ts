import { Generated, Kysely, SelectExpression } from 'kysely';

type DB = {
    test: {
        id: Generated<number>;
        type: 'a' | 'b';
        updatedAt: number;
        createdAt: number;
    };
};

export function dynamicSelect<SE extends SelectExpression<DB, 'test'>>(db: Kysely<DB>, selections: ReadonlyArray<SE>) {
    return db.selectFrom('test').select(selections).execute();
}

