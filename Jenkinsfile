pipeline {
    agent any

    stages {
        // this is a single line comment in Jenkins

        /*
        This is a multiline comment in Jenkins
        */
               stage('E2E Test') {
            agent {
                    docker {
                        image 'mcr.microsoft.com/playwright:v1.49.1-noble'     
                        args '--ipc=host'  // Required for running browsers
                        reuseNode: true                   
                    }
                }
            
             environment {
        CI = 'true' // Necessary for CI tools to run Playwright
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    sh 'npm ci'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run Playwright E2E tests
                    sh 'npx playwright test --reporter=dot'
                }
            }
        }
        stage('Generate Report') {
            steps {
                script {
                    // Optional: Generate HTML test report
                    sh 'npx playwright show-report'
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**/*.*', allowEmptyArchive: true
            junit '**/test-results/*.xml'
        }
    }        
}
