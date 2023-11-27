 <template>
  <div class="overflow-auto row wrap q-px-xl">
    <div
      class=" bg-surface shadow-xl cursor-pointer rounded-lg items-center q-mb-lg"
      v-for="doctor in allDoctors"
      :key="doctor.id"
    >
      <div class="p-2 row justify-center items-center ">
        <div class=" q-py-xl q-px-lg">
           <q-avatar style="height: 10rem; width: 10rem" >
              <img :src="doctor.user.profile.image" alt="Doctor Image" class="object-cover shadow-xl"  />
            </q-avatar>
        </div>
    

        <div class="m-3 justify-center q-pr-lg">
          <div class="font-bold text-lg">{{ doctor.full_name }}</div>
          <div class="font-secondary">{{ doctor.specialty }}</div>

          <div class="row wrap justify-start items-start content-start">
            <div v-for="schedule in doctor.available_schedules" :key="schedule.name">
              <div class="text-xs pr-1">{{ schedule.name }}</div>
            </div>
          </div>

          <div>{{ `${doctor.from}-${doctor.to}` }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      allDoctors: [
        {
          id: 1,
          full_name: 'Dr. Kristina T. Vergara-Garcia',
          specialty: 'Cardiologist',
          user: {
            profile: {
              image: require('@/assets/img/images/doctor3.png'),
            },
          },
          available_schedules: [
            { name: 'Monday' },
            { name: 'Wednesday' },
            { name: 'Tuesday' },
          ],
          from: '09:00 AM',
          to: '05:00 PM',
        },
        {
          id: 1,
          full_name: 'Dr. Kristina T. Vergara-Garcia',
          specialty: 'Cardiologist',
          user: {
            profile: {
              image: require('@/assets/img/images/doctor3.png'),
            },
          },
          available_schedules: [
            { name: 'Monday' },
            { name: 'Wednesday' },
            { name: 'Tuesday' },
          ],
          from: '09:00 AM',
          to: '05:00 PM',
        },
      ],
    };
  },
};
</script>

<style>
</style>
