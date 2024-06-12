import { MongoClient } from 'mongodb';

async function removeUniqueIndex() {
  const uri = "mongodb://localhost/app";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('app');
    const collection = database.collection('tracks');
    await collection.dropIndex('author_1');
    console.log('Índice único en el campo `author` eliminado exitosamente.');
  } catch (error) {
    console.error('Error al eliminar el índice:', error);
  } finally {
    await client.close();
  }
}

removeUniqueIndex().catch(console.error);