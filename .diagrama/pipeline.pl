@startuml
!define RECTANGLE class
allowmixing

RECTANGLE "CI Pipeline" {
  :Checkout code;
  :Set up Node.js;
  :Install dependencies;
  :Run tests;
  :Build project;
  :Upload artifact;
  :Notify on failure;
}

RECTANGLE "CD Pipeline" {
  :Checkout code;
  :Download artifact;
  :Create GitHub Release;
  :Notify on failure;
  :Deploy to Test Environment;
  :Notify on failure;
  :Manual approval for production deploy;
  :Deploy to GitHub Pages;
  :Notify on failure;
}

rectangle "CI Pipeline" as ci
rectangle "CD Pipeline" as cd

ci -down-> cd : needs: build
cd : needs: release
@enduml