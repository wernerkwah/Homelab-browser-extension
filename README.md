Homelab Monitor Browser Extension
Overview
Homelab Monitor is a Chrome browser extension that provides quick visibility into the health and availability of services running in my DevOps homelab environment.

The extension queries Prometheus metrics and displays the current status of critical services directly from the browser toolbar.

Features
Monitor Jenkins availability
Monitor Prometheus availability
Monitor Node Exporter availability
Quick access links to:

Grafana
Prometheus
Jenkins
Lightweight browser extension using HTML, CSS, and JavaScript
Uses Prometheus API for real-time status checks
Homelab Architecture
Windows Workstation
↓
GitHub Repository
↓
Jenkins Pipeline
↓
Docker Containers
↓
Prometheus Monitoring
↓
Grafana Dashboards
↓
Chrome Extension Status View

Technologies Used
GitHub
Git
Jenkins
Docker
Prometheus
Grafana
Node Exporter
JavaScript
HTML
CSS
Chrome Extension Manifest V3
Monitored Services
Service

Port

Jenkins

50000

Grafana

3000

Prometheus

9090

Node Exporter

9100

Installation
Clone the repository
git clone https://github.com/yourusername/homelab-monitor.git
Open Chrome
Navigate to:
chrome://extensions
Enable Developer Mode
Select Load Unpacked
Choose the extension folder
Click the Homelab Monitor icon in Chrome
Prometheus Query
The extension checks service availability using:

up
Example API call:

http://192.168.1.4:9090/api/v1/query?query=up
Future Enhancements
Grafana alert integration
Service response time monitoring
Jenkins build status display
Kubernetes pod health monitoring
RabbitMQ queue monitoring
GLPI ticket integration
Email and Slack alert notifications
Learning Objectives
This project demonstrates:

Browser extension development
Prometheus API integration
Monitoring and observability concepts
DevOps automation
Service health validation
Infrastructure monitoring
Author
Werner Nzuoma

DevOps Engineer | Cloud Engineer | Homelab Enthusiast

Project Status
Active Development