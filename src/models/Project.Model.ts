import mongoose, { Schema, Document } from "mongoose";

export interface Project extends Document {
  title: string;
  description: string;
  image: string;
  categories: string;
}

//
const ProjectSchema: Schema<Project> = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  categories: {
    type: String,
    required: [true, "Categories is required"],
  },
});

const ProjectModel =
  (mongoose.models.Project as mongoose.Model<Project>) ||
  mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;
