# User Stories & Acceptance Criteria: Organization Switcher Navigation

## Epic
As a user managing multiple organizations, I need to easily switch between organizations and access organization management features from the global navigation.

---

## User Story 1: View Available Organizations
**As a** user with access to multiple organizations  
**I want to** view all organizations I have access to in the avatar dropdown menu  
**So that** I can see which organizations I can switch to and which one is currently active

### Acceptance Criteria

#### AC 1.1: Avatar Dropdown Trigger
- **GIVEN** I am logged into the application
- **WHEN** I view the left navigation sidebar
- **THEN** I should see my user avatar at the bottom of the sidebar
- **AND** the avatar should display my initials in a gradient background
- **AND** there should be a green online status indicator
- **AND** my name and email should be visible next to the avatar

#### AC 1.2: Opening Organization Menu
- **GIVEN** I am viewing the left navigation sidebar
- **WHEN** I click on my avatar/profile section
- **THEN** a dropdown menu should open
- **AND** the dropdown should be 320px wide (w-80)
- **AND** the dropdown should align to the right edge of the trigger

#### AC 1.3: Organization List Display
- **GIVEN** the organization dropdown menu is open
- **WHEN** I view the menu contents
- **THEN** I should see a header reading "Switch organizations"
- **AND** I should see a list of all organizations I have access to (minimum 1, showing 3 in implementation)
- **AND** each organization should display:
  - A circular avatar with organization initials
  - The full organization name
  - A radio button indicator on the right
- **AND** organizations should be listed in a vertical layout with spacing between items

#### AC 1.4: Visual Hierarchy
- **GIVEN** the organization dropdown is open
- **WHEN** I view the menu structure
- **THEN** the "Switch organizations" section should be at the top
- **AND** there should be a visual separator (border/divider) below the organizations list
- **AND** utility menu items should appear below the separator
- **AND** padding should be consistent (p-4 for main section)

---

## User Story 2: Switch Between Organizations
**As a** user with access to multiple organizations  
**I want to** switch to a different organization from the dropdown menu  
**So that** I can view and manage grants specific to that organization

### Acceptance Criteria

#### AC 2.1: Current Organization Indication
- **GIVEN** I have the organization dropdown open
- **WHEN** I view the list of organizations
- **THEN** the currently active organization should have a filled teal radio button (border-teal-600 bg-teal-600)
- **AND** the radio button should contain a white dot indicator (w-2 h-2)
- **AND** non-selected organizations should have an empty gray radio button (border-gray-300 bg-white)

#### AC 2.2: Organization Selection Interaction
- **GIVEN** I have the organization dropdown open
- **WHEN** I hover over an organization row
- **THEN** the entire row should show a hover state (bg-gray-50)
- **AND** the cursor should change to pointer
- **AND** the row should have smooth transition animations

#### AC 2.3: Switching Organizations
- **GIVEN** I have the organization dropdown open
- **WHEN** I click on a different organization
- **THEN** the radio button for that organization should become filled with teal
- **AND** the previously selected organization's radio button should become empty/gray
- **AND** the application context should switch to the selected organization
- **AND** the dropdown menu should remain open to show the selection change

#### AC 2.4: Organization Avatar Display
- **GIVEN** I am viewing an organization in the list
- **WHEN** I look at the organization avatar
- **THEN** it should be a 40px circular element (w-10 h-10)
- **AND** it should have a light gray background (bg-gray-100)
- **AND** it should display the organization's initials in dark gray (text-gray-600)
- **AND** the initials should be centered and in semibold font

---

## User Story 3: Access Organization Management
**As a** user managing organizations  
**I want to** quickly navigate to organization management features  
**So that** I can view and edit organization details

### Acceptance Criteria

#### AC 3.1: My Organization Menu Item Display
- **GIVEN** the organization dropdown is open
- **WHEN** I view the utility menu section
- **THEN** I should see a "My Organization (4)" menu item
- **AND** it should display a building/organization icon on the left
- **AND** it should show a keyboard shortcut "⌘O" on the right in monospace font
- **AND** the number in parentheses should indicate the total number of organizations I have access to

#### AC 3.2: My Organization Interaction
- **GIVEN** the organization dropdown is open
- **WHEN** I hover over the "My Organization" menu item
- **THEN** the item should show a hover state
- **AND** the cursor should change to pointer

#### AC 3.3: My Organization Navigation
- **GIVEN** the organization dropdown is open
- **WHEN** I click on "My Organization (4)"
- **THEN** I should be navigated to the Organization Profile page
- **AND** the dropdown menu should close
- **AND** the navigation should highlight the "Organization Profile" item

#### AC 3.4: Keyboard Shortcut Support
- **GIVEN** I am viewing any page in the application
- **WHEN** I press ⌘O (Command+O on Mac)
- **THEN** I should be navigated directly to the Organization Profile page
- **AND** the keyboard shortcut should work regardless of dropdown state

---

## User Story 4: Sign Out of Application
**As a** user  
**I want to** sign out of my account from the navigation menu  
**So that** I can securely end my session

### Acceptance Criteria

#### AC 4.1: Sign Out Menu Item Display
- **GIVEN** the organization dropdown is open
- **WHEN** I view the utility menu section
- **THEN** I should see a "Sign out" menu item below "My Organization"
- **AND** it should display a logout icon on the left
- **AND** it should show a keyboard shortcut "⌃⌘Q" on the right in monospace font

#### AC 4.2: Sign Out Interaction
- **GIVEN** the organization dropdown is open
- **WHEN** I hover over the "Sign out" menu item
- **THEN** the item should show a hover state
- **AND** the cursor should change to pointer

#### AC 4.3: Sign Out Action
- **GIVEN** the organization dropdown is open
- **WHEN** I click on "Sign out"
- **THEN** I should be logged out of the application
- **AND** my session should be terminated
- **AND** I should be redirected to the login page
- **AND** all application state should be cleared

#### AC 4.4: Sign Out Keyboard Shortcut
- **GIVEN** I am viewing any page in the application
- **WHEN** I press ⌃⌘Q (Control+Command+Q)
- **THEN** I should be immediately signed out
- **AND** the keyboard shortcut should work regardless of dropdown state

---

## User Story 5: Visual Feedback and States
**As a** user interacting with the navigation menu  
**I want to** receive clear visual feedback for all interactions  
**So that** I understand the current state and available actions

### Acceptance Criteria

#### AC 5.1: Dropdown Open/Close Animation
- **GIVEN** the dropdown menu is closed
- **WHEN** I click the avatar trigger
- **THEN** the dropdown should animate smoothly into view
- **AND** when I click outside the dropdown or press ESC
- **THEN** the dropdown should close with a smooth animation

#### AC 5.2: Interactive Element States
- **GIVEN** I am interacting with the dropdown menu
- **WHEN** I hover over any clickable element
- **THEN** appropriate hover states should be displayed:
  - Organization rows: bg-gray-50
  - Menu items: default hover state with rounded corners (rounded-lg)
- **AND** all transitions should be smooth (transition-colors class)

#### AC 5.3: Radio Button Visual States
- **GIVEN** I am viewing the organization list
- **WHEN** I view a selected organization
- **THEN** the radio button should have:
  - Teal border (border-teal-600)
  - Teal background (bg-teal-600)
  - White inner dot (w-2 h-2 bg-white rounded-full)
- **AND** when I view a non-selected organization
- **THEN** the radio button should have:
  - Gray border (border-gray-300)
  - White background (bg-white)
  - No inner dot

#### AC 5.4: Spacing and Layout Consistency
- **GIVEN** the dropdown menu is open
- **WHEN** I view all elements
- **THEN** spacing should be consistent:
  - Main section padding: p-4
  - Organization list spacing: space-y-2
  - Individual row padding: p-2
  - Menu item padding: py-3 mx-2
  - Gap between avatar and text: gap-3
  - Border radius for rows: rounded-lg

---

## User Story 6: Responsive and Accessible Navigation
**As a** user with accessibility needs  
**I want to** navigate the organization menu using keyboard and screen readers  
**So that** I can access all functionality regardless of input method

### Acceptance Criteria

#### AC 6.1: Keyboard Navigation
- **GIVEN** the dropdown menu is open
- **WHEN** I press Tab
- **THEN** focus should move sequentially through:
  1. First organization
  2. Second organization
  3. Third organization
  4. My Organization menu item
  5. Sign out menu item
- **AND** the currently focused element should have a visible focus indicator

#### AC 6.2: Keyboard Selection
- **GIVEN** an organization is focused in the dropdown
- **WHEN** I press Enter or Space
- **THEN** that organization should be selected
- **AND** the radio button state should update

#### AC 6.3: Escape Key Behavior
- **GIVEN** the dropdown menu is open
- **WHEN** I press the Escape key
- **THEN** the dropdown should close
- **AND** focus should return to the avatar trigger

#### AC 6.4: Screen Reader Support
- **GIVEN** I am using a screen reader
- **WHEN** I navigate to the avatar trigger
- **THEN** the screen reader should announce:
  - User name
  - Email address
  - "Button" role
  - Expanded/collapsed state
- **AND** when navigating organizations
- **THEN** the screen reader should announce:
  - Organization name
  - "Radio button" role
  - Selected/not selected state

#### AC 6.5: Focus Management
- **GIVEN** the dropdown is closed
- **WHEN** I click or keyboard-activate the avatar trigger
- **THEN** the dropdown should open
- **AND** focus should move to the first organization in the list
- **AND** when the dropdown closes
- **THEN** focus should return to the avatar trigger

---

## User Story 7: Organization Count Display
**As a** user  
**I want to** see how many organizations I have access to  
**So that** I can understand my account scope

### Acceptance Criteria

#### AC 7.1: Organization Count Badge
- **GIVEN** I have the dropdown menu open
- **WHEN** I view the "My Organization" menu item
- **THEN** I should see a number in parentheses after the text
- **AND** the number should accurately reflect the total count of organizations I have access to
- **AND** the number should update dynamically if organizations are added or removed

#### AC 7.2: Single Organization Display
- **GIVEN** I have access to only one organization
- **WHEN** I open the organization dropdown
- **THEN** the "Switch organizations" section should still display
- **AND** only one organization should be shown
- **AND** the "My Organization (1)" should show the count as 1

#### AC 7.3: Multiple Organizations Display
- **GIVEN** I have access to multiple organizations (e.g., 3)
- **WHEN** I open the organization dropdown
- **THEN** all organizations should be visible in the list
- **AND** the "My Organization (3)" should show the accurate count

---

## User Story 8: Persistent Organization Selection
**As a** user  
**I want to** my organization selection to persist across sessions  
**So that** I don't have to reselect my organization every time I log in

### Acceptance Criteria

#### AC 8.1: Selection Persistence
- **GIVEN** I have selected a specific organization
- **WHEN** I navigate to different pages within the application
- **THEN** the selected organization should remain active
- **AND** the radio button state should reflect my selection on all pages

#### AC 8.2: Session Persistence
- **GIVEN** I have selected a specific organization
- **WHEN** I refresh the browser page
- **THEN** my organization selection should be maintained
- **AND** I should not be switched to a different organization

#### AC 8.3: Cross-Session Persistence
- **GIVEN** I have selected a specific organization
- **WHEN** I log out and log back in
- **THEN** my previously selected organization should be the active organization
- **AND** the radio button should show the correct selection

#### AC 8.4: First-Time User Default
- **GIVEN** I am a new user logging in for the first time
- **WHEN** I open the organization dropdown
- **THEN** the first organization in my list should be selected by default
- **AND** the radio button for that organization should be filled

---

## Technical Notes

### Component Structure
```
DropdownMenu
├── DropdownMenuTrigger (Avatar + User Info)
└── DropdownMenuContent (w-80)
    ├── Organization Switcher Section (p-4)
    │   ├── Header: "Switch organizations"
    │   └── Organization List (space-y-2)
    │       └── Organization Rows (each)
    │           ├── Avatar Circle (w-10 h-10)
    │           ├── Organization Name
    │           └── Radio Button (w-5 h-5)
    ├── Separator
    ├── My Organization MenuItem
    │   ├── Building Icon
    │   ├── Text: "My Organization (count)"
    │   └── Keyboard Shortcut: "⌘O"
    └── Sign Out MenuItem
        ├── Logout Icon
        ├── Text: "Sign out"
        └── Keyboard Shortcut: "⌃⌘Q"
```

### State Management
- `selectedOrganization`: Tracks currently active organization name
- `organizations`: Array of organization objects with id, name, and initials
- Organization selection triggers context switch throughout application

### Styling Standards
- Brand color: Teal (#0d9488 - teal-600)
- Radio button selected: border-teal-600, bg-teal-600
- Radio button unselected: border-gray-300, bg-white
- Hover states: bg-gray-50 with smooth transitions
- Dropdown width: 320px (w-80)
- Consistent spacing: p-4, gap-3, space-y-2

### Accessibility Requirements
- All interactive elements must be keyboard accessible
- Focus indicators must be visible on all focusable elements
- Screen reader announcements for all state changes
- ARIA labels for icon-only buttons
- Semantic HTML structure (button, nav, list elements)
- Color contrast ratios must meet WCAG 2.1 AA standards

### Future Enhancements
- Search/filter organizations when list exceeds 10 items
- Organization avatars with custom images
- Recently accessed organizations section
- Organization favorites/pinning
- Add new organization action
- Organization role indicator (admin, member, viewer)
