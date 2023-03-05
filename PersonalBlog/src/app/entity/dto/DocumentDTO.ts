export class Document {
  documentId: number;
  documentName: string;
  documentWriter: string;
  description: string;
  deleteFlag: number;

  constructor(documentId: number, documentName: string, documentWriter: string, description: string, deleteFlag: number) {
    this.documentId = documentId;
    this.documentName = documentName;
    this.documentWriter = documentWriter;
    this.description = description;
    this.deleteFlag = deleteFlag;
  }
}
