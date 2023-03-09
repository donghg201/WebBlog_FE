export class Document {
  documentId: number;
  documentName: string;
  documentWriter: string;
  description: string;
  documentPoster: string;
  documentDate: string;
  deleteFlag: number;

  constructor(documentId: number, documentName: string, documentWriter: string, description: string, documentPoster: string, documentDate: string, deleteFlag: number) {
    this.documentId = documentId;
    this.documentName = documentName;
    this.documentWriter = documentWriter;
    this.description = description;
    this.documentPoster = documentPoster;
    this.documentDate = documentDate;
    this.deleteFlag = deleteFlag;
  }
}
