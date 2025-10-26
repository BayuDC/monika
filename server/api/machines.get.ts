export default defineEventHandler(async event => {
  return await MachineSchema.find().sort({ index: 1 });
});
