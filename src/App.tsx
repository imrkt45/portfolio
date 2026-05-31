import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Article,
  Close,
  Code,
  DarkMode,
  Email,
  GitHub,
  Launch,
  LightMode,
  LinkedIn,
  LocationOn,
  Phone,
  Psychology,
  Storage,
  Terminal,
} from '@mui/icons-material';
import { useMemo } from 'react';
import { buildTheme } from './app/theme';
import {
  capabilities,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
  type ProjectCategory,
} from './data/portfolio';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectProject, setProjectFilter, toggleMode } from './store/uiSlice';

const filters: ProjectCategory[] = ['all', 'frontend', 'fullstack', 'ai', 'mobile'];
const capabilityIcons = [Code, Storage, Psychology];

function App() {
  const dispatch = useAppDispatch();
  const { mode, projectFilter, selectedProject } = useAppSelector((state) => state.ui);
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const filteredProjects = projects.filter(
    (project) => projectFilter === 'all' || project.category === projectFilter,
  );
  const activeProject = projects.find((project) => project.title === selectedProject);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`page-shell ${mode}`}>
        <Box component="header" className="topbar">
          <Container maxWidth="lg">
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
              <Stack direction="row" alignItems="center" gap={1.25}>
                <Terminal color="primary" />
                <Typography variant="subtitle1" fontWeight={700}>
                  Raj.dev
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={0.5}>
                <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                  <IconButton onClick={() => dispatch(toggleMode())} color="inherit">
                    {mode === 'dark' ? <LightMode /> : <DarkMode />}
                  </IconButton>
                </Tooltip>
                <Button href={profile.resume} target="_blank" startIcon={<Article />} variant="outlined">
                  Resume
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box component="main">
          <Box className="hero">
            <Container maxWidth="lg" className="hero-inner">
              <Stack maxWidth={720} gap={2.4} className="hero-copy">
                <Chip className="hero-chip" label={`${profile.location} | ${profile.role}`} />
                <Typography variant="h1" className="hero-title">
                  {profile.name}
                </Typography>
                <Typography variant="h5" color="text.secondary" maxWidth={680}>
                  {profile.summary}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5}>
                  <Button href={`mailto:${profile.email}`} size="large" variant="contained" startIcon={<Email />}>
                    Contact
                  </Button>
                  <Button href="#projects" size="large" variant="outlined" startIcon={<Launch />}>
                    View Projects
                  </Button>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  <Button href={profile.github} target="_blank" size="small" startIcon={<GitHub />}>
                    GitHub
                  </Button>
                  <Button href={profile.linkedin} target="_blank" size="small" startIcon={<LinkedIn />}>
                    LinkedIn
                  </Button>
                  <Button href={profile.leetcode} target="_blank" size="small" startIcon={<Code />}>
                    LeetCode
                  </Button>
                </Stack>
              </Stack>
            </Container>
          </Box>

          <Container maxWidth="lg">
            <Stack className="section stats-grid">
              {stats.map((item) => (
                <Paper key={item.label} className="stat-tile" elevation={0}>
                  <Typography variant="h4">{item.value}</Typography>
                  <Typography color="text.secondary">{item.label}</Typography>
                </Paper>
              ))}
            </Stack>

            <Box className="section compact-section">
              <Box className="section-heading">
                <Typography variant="h2">What I Build</Typography>
                <Typography color="text.secondary">
                  A focused mix of production frontend work, full-stack fundamentals, and AI-enabled product features.
                </Typography>
              </Box>
              <Box className="capability-grid">
                {capabilities.map((item, index) => {
                  const Icon = capabilityIcons[index];
                  return (
                    <Card key={item.title} variant="outlined" className="capability-card">
                      <CardContent>
                        <Icon color="primary" />
                        <Typography variant="h6" mt={2}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary" mt={1}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Box>

            <Box className="section" id="skills">
              <Box className="section-heading">
                <Typography variant="h2">Technical Skills</Typography>
                <Typography color="text.secondary">
                  Tools and technologies used across the portfolio projects and work experience.
                </Typography>
              </Box>
              <Box className="skill-grid">
                {skillGroups.map((group) => (
                  <Card key={group.title} variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {group.title}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {group.skills.map((skill) => (
                          <Chip key={skill} label={skill} size="small" />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            <Box className="section">
              <Typography variant="h2" gutterBottom>
                Experience
              </Typography>
              <Stack gap={2}>
                {experience.map((item) => (
                  <Card key={`${item.role}-${item.period}`} variant="outlined" className="timeline-card">
                    <CardContent>
                      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={1}>
                        <Box>
                          <Typography variant="h5">{item.role}</Typography>
                          <Typography color="primary" fontWeight={650}>
                            {item.company}
                          </Typography>
                        </Box>
                        <Chip label={item.period} />
                      </Stack>
                      <Stack component="ul" gap={1.2} className="clean-list">
                        {item.points.map((point) => (
                          <Typography component="li" color="text.secondary" key={point}>
                            {point}
                          </Typography>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>

            <Box className="section" id="projects">
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={2}>
                <Box>
                  <Typography variant="h2">Projects</Typography>
                  <Typography color="text.secondary">
                    Filter by focus area, then open each project for implementation details.
                  </Typography>
                </Box>
                <Tabs
                  value={projectFilter}
                  onChange={(_, value: ProjectCategory) => dispatch(setProjectFilter(value))}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {filters.map((filter) => (
                    <Tab key={filter} label={filter} value={filter} />
                  ))}
                </Tabs>
              </Stack>
              <Box className="project-grid">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.title}
                    variant="outlined"
                    className="project-card"
                    onClick={() => dispatch(selectProject(project.title))}
                  >
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={2}>
                        <Box>
                          <Chip label={project.category} size="small" color="primary" variant="outlined" />
                          <Typography variant="h5" mt={2}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Launch color="primary" />
                      </Stack>
                      <Typography color="text.secondary" mt={2}>
                        {project.summary}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} mt={2}>
                        {project.stack.slice(0, 6).map((tool) => (
                          <Chip key={tool} label={tool} size="small" />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            <Box className="section split-section">
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h2" gutterBottom>
                    Education
                  </Typography>
                  <Typography variant="h5">{education.degree}</Typography>
                  <Typography color="text.secondary">{education.school}</Typography>
                  <Typography color="primary" fontWeight={650} mt={1}>
                    {education.period}
                  </Typography>
                </CardContent>
              </Card>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h2" gutterBottom>
                    Contact
                  </Typography>
                  <Stack gap={1.5}>
                    <Link href={`mailto:${profile.email}`} color="inherit" underline="hover">
                      <Email fontSize="small" /> {profile.email}
                    </Link>
                    <Link href={`tel:${profile.phone.replace(/\s/g, '')}`} color="inherit" underline="hover">
                      <Phone fontSize="small" /> {profile.phone}
                    </Link>
                    <Typography color="text.secondary">
                      <LocationOn fontSize="small" /> {profile.location}
                    </Typography>
                    <Stack direction="row" gap={1}>
                      <IconButton href={profile.github} target="_blank" color="primary">
                        <GitHub />
                      </IconButton>
                      <IconButton href={profile.linkedin} target="_blank" color="primary">
                        <LinkedIn />
                      </IconButton>
                      <IconButton href={profile.leetcode} target="_blank" color="primary">
                        <Code />
                      </IconButton>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        <Drawer
          anchor="right"
          open={Boolean(activeProject)}
          onClose={() => dispatch(selectProject(null))}
          PaperProps={{ className: 'project-drawer' }}
        >
          {activeProject && (
            <Stack gap={3} p={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Chip label={activeProject.category} color="primary" />
                <IconButton onClick={() => dispatch(selectProject(null))}>
                  <Close />
                </IconButton>
              </Stack>
              <Box>
                <Typography variant="h3">{activeProject.title}</Typography>
                <Typography color="text.secondary" mt={1}>
                  {activeProject.summary}
                </Typography>
              </Box>
              <Box>
                <Typography variant="overline">Skills Used</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                  {activeProject.stack.map((tool) => (
                    <Chip key={tool} label={tool} />
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography variant="h6">Highlights</Typography>
                <Stack component="ul" gap={1} className="clean-list">
                  {activeProject.highlights.map((highlight) => (
                    <Typography component="li" color="text.secondary" key={highlight}>
                      {highlight}
                    </Typography>
                  ))}
                </Stack>
              </Box>
              {activeProject.href && (
                <Button href={activeProject.href} target="_blank" variant="contained" startIcon={<GitHub />}>
                  Open Repository
                </Button>
              )}
            </Stack>
          )}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
