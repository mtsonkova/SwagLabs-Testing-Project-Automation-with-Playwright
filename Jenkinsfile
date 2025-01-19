pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.49.1-noble' // Official Playwright image
            args '--ipc=host'  // Required for running browsers
        }
    }
    environment {
        CI = 'true' // Necessary for CI tools to run Playwright
        NPM_CONFIG_CACHE = '.npm' // Use a local writable directory for npm cache
    }
    stages {
        stage('Install Dependencies') {
            steps {
                 script {
                    // Ensure npm cache directory is writable
                    sh 'mkdir -p .npm && chmod -R 777 .npm'
                    // Install dependencies
                    sh 'npm ci'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run Playwright E2E tests
                    sh 'npx playwright test --reporter=html'
                }
            }
        }
     
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            
        }
    }
}
