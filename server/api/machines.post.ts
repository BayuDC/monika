import { string, boolean, object, array } from 'yup';

const schema = array()
  .of(
    object({
      address: string().required(),
      isOnline: boolean().required(),
    })
  )
  .max(10);

export default defineEventHandler(async event => {
  const body = await readBody(event);

  try {
    const data = await schema.validate(body);
    if (!data?.length) throw Error;

    await MachineSchema.bulkWrite(
      data.map(m => {
        const update: any = { $set: m };

        if (m.address === '10.1.1.32' && m.isOnline) {
          update.$set = { ...m, lastSeen: new Date() };
        }

        return {
          updateOne: {
            filter: { address: m.address },
            update,
            upsert: true,
          },
        };
      })
    );

    return { data };
  } catch (e) {
    setResponseStatus(event, 418);
    return;
  }
});
