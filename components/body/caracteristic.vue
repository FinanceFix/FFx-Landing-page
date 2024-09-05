<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <div class="flex justify-center">
    <Tabs default-value="utilisation" class="flex flex-row justify-evenly">
      <div class="flex flex-col w-2/5">
        <h3 class="text-center mx-auto text-4xl font-bold my-4">
          Suivre votre patrimoine,
          <br />
          <span> en pilote automatique </span>
        </h3>
        <TabsList class="flex flex-col justify-between">
          <TabsTrigger value="utilisation">
            Une interface intuitive, même pour les débutants en gestion
            financière
          </TabsTrigger>
          <TabsTrigger value="personnalisation">
            Adapté à vos besoins spécifiques, FinanceFix évolue avec vous.
          </TabsTrigger>
          <TabsTrigger value="support">
            Une équipe prête à vous aider, à tout moment.
          </TabsTrigger>
        </TabsList>
      </div>

      <div class="w-2/5">
        <!-- partie utilisation -->
        <TabsContent value="utilisation">
          <Card>
            <CardHeader>
              <CardTitle>Utilisation</CardTitle>
              <CardDescription> Concernant l'utilisation </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium maxime ullam culpa facere! Ea temporibus repellendus
              iure neque. Reprehenderit enim consectetur, excepturi quaerat
              dolores accusamus quisquam dolorum architecto quam reiciendis eius
              cum voluptatum inventore sint at? Necessitatibus similique ratione
              possimus.
            </CardContent>
          </Card>
        </TabsContent>

        <!-- partie personnalisation -->
        <TabsContent value="personnalisation">
          <Card>
            <CardHeader>
              <CardTitle>Personnalisation</CardTitle>
              <CardDescription>
                concernant la personnalisation
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis maxime eveniet aperiam at nesciunt illo sunt doloribus
              error perspiciatis doloremque!
            </CardContent>
          </Card>
        </TabsContent>

        <!-- partie Support -->
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
              <CardDescription> Concernant le Support </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis maxime eveniet aperiam at nesciunt illo sunt doloribus
              error perspiciatis doloremque!
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  </div>
</template>
