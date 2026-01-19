# BuildTrack

Residential build progress tracking for builders, subcontractors, and clients.

## Highlights

- Job-based dashboards with stage progress and task checklists
- Subbie-friendly updates with photos, notes, and timestamps
- Client-friendly timeline, approvals, and issue visibility
- One source of truth per build

## MVP Screens

1. Home (dashboard snapshot)
2. Jobs (active jobs list)
3. Timeline (stage milestones)
4. Issues (approvals + blockers)
5. Settings (notifications + field updates)

## Quick Start

```bash
cd vdapp10-buildtrack
npm install
npm run ios
```

## Project Structure

```
vdapp10-buildtrack/
├── App.tsx
├── app.json
├── src/
│   ├── navigation/
│   ├── screens/
│   ├── store/
│   └── theme/
```

## Notes

- Replace placeholder data in `src/screens` with live job/task feeds.
