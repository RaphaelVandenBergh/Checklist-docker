pipeline {
    agent {
        docker {
            image 'node:19-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Deliver') { 
            steps {
                sh 'npx prisma generate'
                sh 'npm run build' 
                sh 'npm run start'
                
            }
        }
    }
    
}