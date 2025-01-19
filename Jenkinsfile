pipeline {
    agent any

    stages {
        // this is a single line comment in Jenkins

        /*
        This is a multiline comment in Jenkins
        */
        stage('Build') {
            agent {
                    docker {
                        image 'node:22-alpine'     
                        reuseNode: true                   
                    }
                }

            steps {
                sh '''
                node --version
                npm --version
                npm ci
                npm run build
                ls la
                '''
            }   
        }

        stage('E2E Test') {
            agent {
                    docker {
                        image 'mcr.microsoft.com/playwright:v1.49.1-noble'     
                        reuseNode: true                   
                    }
                }
            
            steps {
                sh '''
                npx playwright test
                '''
            }
        }
    }


    post{
        always {
            junit 'test-results/junit.xml'
        }
    }
}
