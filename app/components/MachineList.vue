<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const { data, refresh } = await useFetch<
  {
    hostname: string;
    address: string;
    isOnline: boolean;
  }[]
>('/api/machines');

onMounted(() => {
  setInterval(() => {
    refresh();
  }, 1000 * 60);
});
</script>

<template>
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
          <TableRow v-for="machine in data" :key="machine.hostname">
            <TableCell>{{ machine.hostname }}</TableCell>
            <TableCell>{{ machine.address }}</TableCell>

            <TableCell>
              <Badge v-if="machine.isOnline" variant="default">Online</Badge>
              <Badge v-else variant="destructive">Offline</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>

<style scoped></style>
