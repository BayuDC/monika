<script setup lang="ts">
import { MonitorOff, Monitor } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import config from '../../config.json';

const machines = config.machines;
</script>

<template>
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
            <Card>
              <CardHeader>
                <CardTitle>Machines</CardTitle>
                <CardDescription>List of all monitored machines</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hostname</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead> Status </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow v-for="machine in machines" :key="machine.hostname">
                      <TableCell>{{ machine.hostname }}</TableCell>
                      <TableCell>{{ machine.address }}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Online</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card class="h-full">
              <CardHeader>
                <CardTitle>Logs Activity</CardTitle>
                <CardDescription>Recent activity and system logs</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell class="w-[50px]">
                        <div
                          class="bg-destructive/60 p-2.5 rounded-full aspect-square flex items-center justify-center"
                        >
                          <MonitorOff color="red" :size="18" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div class="">Machine <b>yuki2</b> is offline</div>
                        <div class="text-muted-foreground">2 minutes ago</div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell class="w-[50px]">
                        <div class="bg-primary/20 p-2.5 rounded-full aspect-square flex items-center justify-center">
                          <Monitor color="#22C55E" :size="18" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div class="">Machine <b>yuki1</b> is online</div>
                        <div class="text-muted-foreground">5 minutes ago</div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
