import mongoose, { Schema, Document } from "mongoose";

export interface Project extends Document {
  title: string;
  description: string;
  image: string;
  fullDetails: string;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    devOps?: string[];
    testing?: string[];
  };
  features: string[];
  futureEnhancements?: string[];
}

//
const ProjectSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  fullDetails: {
    type: String,
    required: true,
  },
  technologies: {
    frontend: {
      type: [String],
      required: true,
    },
    backend: {
      type: [String],
      required: true,
    },
    database: {
      type: [String],
      required: true,
    },
    devOps: {
      type: [String],
    },
    testing: {
      type: [String],
    },
  },
  features: {
    type: [String],
    required: true,
  },
  futureEnhancements: {
    type: [String],
  },
});
