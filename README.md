# Dashboard created by React

This 2-pages Front-end site created by React and CSS, using React-router to movement between pages. Also this site has adaptive and that means this site can be opened in phones.

## Open web-site by link using GitHub Pages

https://HegryLuis.github.io/Dashboard

## Downloading and setup

### 1. Clone repository

git clone https://github.com/HegryLuis/Dashboard

### 2. Install dependencies

npm install

### 3. Launch locally

npm start

## Pages

### MainPage.jsx

This page contains 5 components(WorkQueue, PortfolioGoals, QuickActions, MarketIntelligence, MyAccounts)

### AccountPage.jsx

This page contains 7 components (AccountHeader, MetricSection, PoliciesCardSection, StatusAndDocsSection, AccountDetailsSection, CommunicationSection, PoliciesTableSection)

## Components

### AccountsTable

This component contains the table which returns in MyAccounts component. This component accepts columns and data for creating table.

### AccountStatusBlock

This component represents progression of account. Used in dashboards or account detail views to show the current phase of a user or business process in a clear, linear way

### AttentionBlock

This component highlights important account alerts that require user attention. It displays a list of items with a title, subtext, and a link to more details, helping users quickly identify and act on priority issues.

### CommentBlock

The CommentBlock component displays a single comment with optional metadata and attachments. It shows the comment type, title, author, date, main content, and—if available—an attachment section with a reply button.

### CommunicationBlock

This component requires 4 comment blocks and using as wrapper for comments block

### DistributionBlock

Visually represents a percentage value using a horizontal progress bar.

### Header

Displays a personalized greeting with the user's name and the number of open tasks. It also includes a search input field and a user avatar

### HistoricalTrendBlock

Visually displays a simple historical trend line using SVG

### LinearProgressBar

Visually displays progress bar. It shows the current value as a filled portion of the bar and the percentage completed.

### MarketIntelligence

This component displays a list of key market insights as colored chips. Each chip consists of a dot

### MetricBlock

Component displays a single metric item, including a title, main value, status, and optional sub-content or link.

### MyAccounts

displays a list of accounts with a search input and a set of buttons for different actions. The component also renders an AccountsTable component described above

### PoliceBlock

Displays a block of information related to a police item

### PoliciesTable

This component represents a table with policy data.This table also includes features like sorting the table by column headers (e.g., line, status, rate change) and formatting the numeric values (e.g., currency and percentage)

### PortfolioGoals

Displays several portfolio-related goals and their progress using visual components like TargetStatusBar and LinearProgressBar

### QueueTable

Component which returns a table designed to display data with sortable columns. Also has a features like sorting the table by created date, name and status

### QuickActions

Component is a simple UI component that displays a set of predefined action buttons.

### ScrollBar

Component is a horizontally scrollable list of navigation buttons that users can click for navigating between pages.

### SideBarMenu

This component is designed to display a sidebar with collapsible categories, each containing a list of items.

### StatusBadge

Simple UI element that visually indicates the status of an item

### TargetStatusBar

This component visually represent a progress bar with a target value, current value, and status indicators like good/bad based on delta

### UserAvatar

Simple UI element for creating an avatar based on a user's name by displaying their initials

### WinnabilityItem

Component is designed to display an item with a progress bar

### IncreasingWinnabilityBlock

Designed to display a list of factors that increase winnability, each represented by a WinnabilityItem

### DecreasingWinnabilityBlock

Designed to display a list of factors that decrease winnability, represented by WinnabilityItem components

### WorkQueue

Provides an interactive and dynamic table view for displaying work queue data, with sorting and filtering capabilities

### ComplianceDocumentation

Returns a list of compliance-related documentation items and allows users to view the current status with a simple "check" indicator
