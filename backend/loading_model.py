import joblib
import numpy as np

model = joblib.load("models/winery.pkl")
print(model(np.random.random((1,5))))