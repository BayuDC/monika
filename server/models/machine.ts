import { defineMongooseModel } from '#nuxt/mongoose';

export const MachineSchema = defineMongooseModel({
  name: 'Machine',
  schema: {
    hostname: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    isOnline: {
      type: Boolean,
      required: false,
    },
  },
});
