<template>
  <div>
    <h2 class="title">Monthly Planning</h2>
    <br/>
    <v-data-table :items :sort-by="store.sortBy" @update:sort-by="store.setSortBy" />
  </div>
</template>

<script setup>
  import { useMonthlyStore } from '../stores/monthly';

  const items = [
    {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      role: 'Project Manager',
    },
    {
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@example.com',
      role: 'Frontend Developer',
    },
    {
      firstName: 'Michael',
      lastName: 'Williams',
      email: 'michael.williams@example.com',
      role: 'Backend Developer',
    },
    {
      firstName: 'Sarah',
      lastName: 'Brown',
      email: 'sarah.brown@example.com',
      role: 'UI/UX Designer',
    },
    {
      firstName: 'David',
      lastName: 'Jones',
      email: 'david.jones@example.com',
      role: 'DevOps Engineer',
    },
    {
      firstName: 'Jennifer',
      lastName: 'Garcia',
      email: 'jennifer.garcia@example.com',
      role: 'QA Engineer',
    },
    {
      firstName: 'Robert',
      lastName: 'Miller',
      email: 'robert.miller@example.com',
      role: 'Product Owner',
    },
    {
      firstName: 'Jessica',
      lastName: 'Davis',
      email: 'jessica.davis@example.com',
      role: 'Scrum Master',
    },
    {
      firstName: 'William',
      lastName: 'Rodriguez',
      email: 'william.rodriguez@example.com',
      role: 'Full Stack Developer',
    },
    {
      firstName: 'Elizabeth',
      lastName: 'Martinez',
      email: 'elizabeth.martinez@example.com',
      role: 'Business Analyst',
    },
    {
      firstName: 'James',
      lastName: 'Hernandez',
      email: 'james.hernandez@example.com',
      role: 'System Architect',
    },
    {
      firstName: 'Ashley',
      lastName: 'Lopez',
      email: 'ashley.lopez@example.com',
      role: 'Technical Writer',
    },
    {
      firstName: 'Christopher',
      lastName: 'Gonzalez',
      email: 'christopher.gonzalez@example.com',
      role: 'Database Administrator',
    },
    {
      firstName: 'Amanda',
      lastName: 'Wilson',
      email: 'amanda.wilson@example.com',
      role: 'Security Specialist',
    },
    {
      firstName: 'Daniel',
      lastName: 'Anderson',
      email: 'daniel.anderson@example.com',
      role: 'Mobile Developer',
    },
  ];
    
  const store = useMonthlyStore();
</script>

<style scoped>
.title {
  color: red;
}
</style>
