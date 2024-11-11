<template>
  <div class="relative flex flex-col items-center justify-center">
    <!--    &lt;!&ndash; Ellipse gradient &ndash;&gt;-->
    <!--    <div-->
    <!--      class="absolute blur-[100px] -left-96 opacity-80 -top-10 w-[38rem] h-[38rem] bg-green-600 rounded-full z-0"-->
    <!--    ></div>-->

    <!-- Content section -->
    <div
      class="grid lg:grid-cols-2 md:grid-row grid-row gap-10 w-[80%] max-w-[1400px]"
    >
      <div
        class="flex flex-col justify-center order-1 items-center gap-10 col-span-1"
      >
        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
      </div>
      <div
        class="flex flex-col gap-6 lg:items-start md:items-center justify-center items-center text-center md:text-center lg:text-left"
      >
        <div>
          <span class="lg:text-6xl md:text-5xl text-3xl font-bold font-primary">
            Vote des <span class="lg:block">fonctionnalités</span>
          </span>
        </div>
        <div class="md:text-lg text-base md:text-center lg:text-left">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            dolore est in praesentium quae quaerat quidem, sapiente similique
            vitae voluptas. Aliquid asperiores autem eveniet expedita laudantium
            modi, odit saepe ullam!
          </span>
        </div>

        <div class="flex">
          <CTA :text="'Tout le monde va bien'" show-icon></CTA>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
// const queryClient = useQueryClient()

// Query
const { isLoading, isError, data, error } = useQuery({
  queryKey: ["todos"],
  queryFn: () => $fetch(config.public?.fiderUrl), // Use $fetch with your api routes to get typesafety
});

watch(data, () => {
  console.log("data", data.value);
});
</script>
<style scoped></style>
