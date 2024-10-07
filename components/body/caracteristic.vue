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
  <div class="mt-[161px]">
    <Tabs
      default-value="utilisation"
      class="flex flex-row justify-evenly text-left w-2/3 mx-auto h-[700px]"
    >
      <div class="flex flex-col justify-between w-2/5">
        <div>
          <h3 class="font-bold my-[23px] leading-[4.5rem] text-[64px] pl-3">
            Suivre votre patrimoine
          </h3>
          <p class="pl-3 text-[20px]">
            On ne peut pas améliorer ce que l'on ne suit pas.Nous automatisons
            le suivi de votre patrimoine.
          </p>
        </div>
        <TabsList class="flex flex-col justify-evenly basis-3/4">
          <TabsTrigger
            value="utilisation"
            class="bg-[#142032] w-full basis-1/4"
          >
            Une interface intuitive, même pour les débutants en gestion
            financière
          </TabsTrigger>
          <TabsTrigger
            value="personnalisation"
            class="bg-[#142032] w-full basis-1/4"
          >
            Adapté à vos besoins spécifiques, FinanceFix évolue avec vous.
          </TabsTrigger>
          <TabsTrigger value="support" class="bg-[#142032] w-full basis-1/4">
            Une équipe prête à vous aider, à tout moment.
          </TabsTrigger>
        </TabsList>
      </div>

      <div class="w-2/5 mt-[161px]">
        <!-- partie utilisation -->
        <TabsContent value="utilisation" class="h-max">
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
