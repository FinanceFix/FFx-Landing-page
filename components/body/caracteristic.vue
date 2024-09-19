
<template>
  <div class=" my-40">
    <Tabs
      default-value="utilisation"
      class="flex flex-row justify-evenly text-left w-[70%] mx-auto h-[700px]"
    >
      <div class="flex flex-col justify-between w-2/5">
        <div class="flex flex-col gap-4">
          <span class="font-bold font-primary my-4  text-6xl">
            Suivre votre patrimoine
          </span>
          <span class=" font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque deleniti dicta ea earum eius error explicabo, fugit id iste magnam magni molestias provident quam qui recusandae totam unde voluptatum.
          </span>
        </div>
        <TabsList class="flex flex-col justify-evenly basis-3/4">
          <TabsTrigger
            value="utilisation"
            class="bg-[#142032] border-[#1D3354] rounded-xl w-full p-4 h-auto"
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

<style scoped></style>
