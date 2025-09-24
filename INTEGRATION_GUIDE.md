# Blood Group Predictor - Integration Guide

This guide explains how to run the complete blood group prediction system with your trained `best_blood_model_mnv2.h5` model.

## Architecture

- **Frontend**: React app (Lovable project) - handles UI and user interactions
- **Backend**: Flask API - serves your trained ML model for predictions
- **Model**: `best_blood_model_mnv2.h5` - your trained MobileNetV2 model

## Setup Instructions

### 1. Prepare Flask Backend

Create a new directory for your Flask backend:

```bash
mkdir flask-backend
cd flask-backend
```

Copy the following files to the `flask-backend` directory:
- `best_blood_model_mnv2.h5` (your trained model)
- `class_labels.json` (your class labels mapping)
- `app.py` (provided in this project)
- `requirements.txt` (provided in this project)

### 2. Install Flask Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run Flask Backend

```bash
python app.py
```

The Flask API will start on `http://localhost:5000`

### 4. Run React Frontend (Lovable)

The React frontend is already configured in this Lovable project. Simply run:

```bash
npm run dev
```

The frontend will be available at `http://localhost:8080`

## File Structure

```
project-root/
├── flask-backend/
│   ├── app.py                          # Flask API with CORS enabled
│   ├── requirements.txt                # Python dependencies
│   ├── best_blood_model_mnv2.h5       # Your trained model (copy here)
│   └── class_labels.json              # Class labels (copy here)
├── src/                                # React frontend
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── FileUploadZone.tsx          # Updated with real API calls
│   └── pages/
│       ├── Home.tsx
│       ├── About.tsx
│       └── Contact.tsx
└── INTEGRATION_GUIDE.md               # This file
```

## API Endpoints

### POST /predict
- **Purpose**: Predict blood group from fingerprint image
- **Input**: Form data with 'image' field containing the fingerprint image
- **Output**: JSON with blood_group, confidence, and additional predictions

Example response:
```json
{
  "blood_group": "A+",
  "confidence": "94.32%",
  "raw_confidence": 94.32,
  "all_predictions": {
    "A+": 94.32,
    "A-": 2.15,
    "B+": 1.87,
    "B-": 0.92,
    "AB+": 0.45,
    "AB-": 0.18,
    "O+": 0.08,
    "O-": 0.03
  }
}
```

### GET /health
- **Purpose**: Check if the API and model are working
- **Output**: Status information

## CORS Configuration

The Flask backend is configured to accept requests from:
- `http://localhost:8080` (Lovable development server)
- `https://lovable.dev` (Lovable production)

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure flask-cors is installed and CORS is enabled
2. **Model Loading**: Ensure `best_blood_model_mnv2.h5` is in the flask-backend directory
3. **Port Conflicts**: Make sure port 5000 is available for Flask
4. **Dependencies**: Install all required Python packages

### Error Messages

- **"Unable to connect to the AI model server"**: Flask backend is not running
- **"Server error occurred"**: Check Flask backend logs for model loading issues
- **"No image part in the request"**: Frontend image upload issue

## Production Deployment

For production deployment:

1. **Backend**: Deploy Flask app to a cloud service (AWS, Google Cloud, Heroku)
2. **Frontend**: Already deployed via Lovable
3. **CORS**: Update CORS origins to include your production domain
4. **API URL**: Update the API endpoint in `FileUploadZone.tsx`

## Model Information

- **Architecture**: MobileNetV2 (224x224 input)
- **Preprocessing**: MobileNetV2 preprocessing (included)
- **Output**: Blood group classification with confidence scores
- **Supported Groups**: Based on your `class_labels.json` file