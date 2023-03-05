export class Category {
  categoryId: number;
  categiryName: String;
  deleteFlag: number;

  constructor(categoryId: number, categiryName: String, deleteFlag: number) {
    this.categoryId = categoryId;
    this.categiryName = categiryName;
    this.deleteFlag = deleteFlag;
  }
}
