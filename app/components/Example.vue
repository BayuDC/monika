<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const darkMode = ref(true);
const email = ref('');
const notifications = ref(true);
const marketing = ref(false);

onMounted(() => {
  document.documentElement.classList.add('dark');
});

function toggleMode() {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
}

function handleSubmit() {
  alert(`Form submitted!\nEmail: ${email.value}\nNotifications: ${notifications.value}\nMarketing: ${marketing.value}`);
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground p-8">
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold">Green Theme Showcase</h1>
          <p class="text-muted-foreground mt-2">Exploring shadcn components with green palette</p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm font-medium">{{ darkMode ? 'Dark' : 'Light' }} Mode</span>
          <Switch v-model:checked="darkMode" @update:checked="toggleMode" />
        </div>
      </div>

      <!-- Button Variants -->
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Different button styles with the green primary color</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap gap-3">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </CardContent>
      </Card>

      <!-- Form Example -->
      <div class="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Enter your details below</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">Email</label>
              <Input v-model="email" type="email" placeholder="you@example.com" />
            </div>
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium">Enable notifications</label>
              <Switch v-model:checked="notifications" />
            </div>
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium">Marketing emails</label>
              <Switch v-model:checked="marketing" />
            </div>
          </CardContent>
          <CardFooter class="flex gap-2">
            <Button @click="handleSubmit" class="flex-1">Submit</Button>
            <Button
              variant="outline"
              @click="
                email = '';
                notifications = true;
                marketing = false;
              "
              >Reset</Button
            >
          </CardFooter>
        </Card>

        <!-- Stats Card -->
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Stats</CardTitle>
            <CardDescription>Real-time metrics</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Total Users</span>
                <span class="font-bold">1,234</span>
              </div>
              <div class="h-2 bg-secondary rounded-full overflow-hidden">
                <div class="h-full bg-primary w-[75%]"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Revenue</span>
                <span class="font-bold">$45,678</span>
              </div>
              <div class="h-2 bg-secondary rounded-full overflow-hidden">
                <div class="h-full bg-primary w-[60%]"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Conversion Rate</span>
                <span class="font-bold">3.4%</span>
              </div>
              <div class="h-2 bg-secondary rounded-full overflow-hidden">
                <div class="h-full bg-primary w-[34%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Color Palette Preview -->
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>Current theme colors</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="space-y-2">
              <div class="h-20 rounded-lg bg-primary flex items-center justify-center">
                <span class="text-primary-foreground font-semibold">Primary</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="h-20 rounded-lg bg-secondary flex items-center justify-center">
                <span class="text-secondary-foreground font-semibold">Secondary</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="h-20 rounded-lg bg-accent flex items-center justify-center">
                <span class="text-accent-foreground font-semibold">Accent</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="h-20 rounded-lg bg-destructive flex items-center justify-center">
                <span class="text-destructive-foreground font-semibold">Destructive</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Text Variants -->
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
          <CardDescription>Text color variants</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
          <p class="text-foreground">Default foreground text</p>
          <p class="text-muted-foreground">Muted foreground text</p>
          <p class="text-primary">Primary colored text</p>
          <p class="text-destructive">Destructive colored text</p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
