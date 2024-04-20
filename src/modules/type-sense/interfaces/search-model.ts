import { Document } from 'bson';
import { ChangeStreamDocument } from 'mongodb';
import Documents from 'typesense/lib/Typesense/Documents';

export interface SearchModel<TSchema extends Document = Document> {
    get documents(): Documents<TSchema>;
    syncData(record: ChangeStreamDocument<TSchema>): Promise<void>;
}
