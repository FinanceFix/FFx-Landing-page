<template>
  <div
    class="relative  flex items-center justify-center my-40 "
  >
<!--    &lt;!&ndash; Ellipse gradient &ndash;&gt;-->
<!--    <div-->
<!--      class="absolute blur-[100px] -left-96 opacity-80 -top-10 w-[38rem] h-[38rem] bg-green-600 rounded-full z-0"-->
<!--    ></div>-->

    <!-- Content section -->
    <div class="grid grid-cols-2  gap-10   w-[70%]">
      <div class=" flex flex-col justify-center items-center gap-10 col-span-1">

        <Feed></Feed>
        <Feed></Feed>
        <Feed></Feed>
      </div>
      <div class=" flex flex-col gap-6">
        <div>
          <span class="text-6xl font-bold my-4 font-primary">
            Vote des fonctionnalités
          </span>
        </div>
      <div>
        <span class="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolore est in praesentium quae quaerat quidem, sapiente similique vitae voluptas. Aliquid asperiores autem eveniet expedita laudantium modi, odit saepe ullam!
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

const config = useRuntimeConfig()
// const queryClient = useQueryClient()

// Query
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: () => $fetch(config.public?.fiderUrl), // Use $fetch with your api routes to get typesafety
})

watch(data, ()=> {
  console.log('data', data.value)
})
</script>
<style scoped></style>
