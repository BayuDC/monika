<script setup lang="ts">
import { MonitorOff, Monitor } from 'lucide-vue-next';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
</script>

<template>
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
              <div class="bg-destructive/60 p-2.5 rounded-full aspect-square flex items-center justify-center">
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
</template>

<style scoped></style>
