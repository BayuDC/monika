<template>
  <Html class="dark">
    <Head>
      <Title>Monika</Title>
    </Head>
    <Body>
      <div class="min-h-screen bg-background text-foreground p-8">
        <div class="max-w-6xl mx-auto space-y-8">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-4xl font-bold">Monika</h1>
            </div>
          </div>
          <div>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="md:col-span-2">
                <MachineList />
              </div>
              <div class="flex flex-col gap-6 md:row-span-2">
                <LogsActivity class="h-full" />
              </div>
              <div class="hidden md:block"></div>
              <div class="">
                <LastUpdate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  </Html>
</template>
