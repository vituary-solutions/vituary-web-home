<template>
    <div class="resume">
        <div class="intro row no-wrap">
            <div class="q-pa-sm">
                <q-avatar class="headshot" size="120px"><img src="/jguertin_headshot.jpg" /></q-avatar>
            </div>
            <div class="intro-detail q-pa-sm">
                <div class="text-h4">{{ experience.name }}</div>
                <div class="text-h6">{{ experience.headline }}</div>
                <div>{{ experience.about }}</div>
            </div>
        </div>

        <div class="row">
            <div class="skills col-3">
                <q-expansion-item class="skills" expand-separator switch-toggle-side default-opened>
                    <template v-slot:header>
                        <q-item-label header class="text-uppercase q-pl-none">Skills</q-item-label>
                    </template>
                    <q-list v-for="section in experience.skills" v-bind:key="section.name">
                        <q-expansion-item expand-separator switch-toggle-side default-opened>
                            <template v-slot:header>
                                <q-item-section class="text-subtitle2 q-ml-sm">{{ section.name }}</q-item-section>
                            </template>

                            <q-item class="block q-pt-xs q-pb-xs" v-for="skill in section.values" v-bind:key="skill.name">
                                <div>{{ skill.name }}</div>
                                <q-linear-progress style="height: 0.5rem" :value="skill.value" rounded :color="section.color" />
                            </q-item>
                        </q-expansion-item>
                    </q-list>
                </q-expansion-item>

                <q-expansion-item expand-separator switch-toggle-side default-opened>
                    <template v-slot:header>
                        <q-item-label header class="text-uppercase q-pl-none">Certifications</q-item-label>
                    </template>
                    <q-list>
                        <q-item v-for="certificate in experience.certifications" v-bind:key="certificate.certificate">
                            <div class="job-header">
                                <span class="company">{{ certificate.institution }} -</span>
                                <span class="position">&nbsp;{{ certificate.certificate }}</span><br/>
                                <span class="dates">{{ certificate.year }}</span>
                            </div>
                        </q-item>
                    </q-list>
                </q-expansion-item>
            </div>

            <div class="jobs col-9 q-pt-sm">
                <q-list>
                    <q-item-label header class="text-uppercase">Experience</q-item-label>
                    <q-expansion-item class="job" v-for="job in experience.jobs" v-bind:key="job.company"
                                      expand-separator switch-toggle-side :content-inset-level="1"
                    >
                        <template v-slot:header>
                            <q-item-section>
                                <div class="job-header">
                                    <span class="company"><a :href="job.url" target="_blank">{{ job.company }}</a> -</span>
                                    <span class="position">&nbsp;{{ job.position }}</span><br/>
                                    <span class="dates">{{ job.start }} - {{ job.end }}</span>
                                </div>
                            </q-item-section>
                        </template>
                        <q-card>
                            <q-card-section>
                                <span class="summary">{{ job.summary }}</span>
                                <ul>
                                    <li class="duty" v-for="highlight in job.highlights" v-bind:key="highlight">{{ highlight }}</li>
                                </ul>
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
                <q-list>
                    <q-item-label header class="text-uppercase">Education</q-item-label>
                    <q-expansion-item class="job" v-for="program in experience.education" v-bind:key="program.institution"
                                      expand-separator switch-toggle-side :content-inset-level="1"
                    >
                        <template v-slot:header>
                            <q-item-section>
                                <div class="job-header">
                                    <span class="company"><a :href="program.url" target="_blank">{{ program.institution }}</a> -</span>
                                    <span class="position">{{program.award}} in&nbsp;{{ program.program }}</span><br/>
                                    <span class="dates">{{ program.start }} - {{ program.end }}</span>
                                </div>
                            </q-item-section>
                        </template>
                        <q-card>
                            <q-card-section>
                                <span class="summary">{{ program.summary }}</span>
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </q-list>
            </div>
        </div>
    </div>
</template>

<script>
import data from './assets/work-history'

export default {
    name: 'Resume',
    data: () => ({
        experience: data
    })
}
</script>

<style lang="stylus">
.resume
    margin: 16px
.q-item__label--header {
    font-size: 1.2em;
}
.duty {
    min-height: initial;
    padding-bottom: 4px;
    padding-bottom: 4px;
}
.company {
    font-weight: bold;
}
.position {
    font-weight: bold;
    font-style: italic;
}
.dates {
    font-size: 0.8em;
    text-transform: uppercase;
}
</style>
