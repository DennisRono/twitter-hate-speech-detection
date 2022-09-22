import pickle
import numpy as np

# Loading model to compare the results
model = pickle.load(open('models/winery.pkl','rb'))
print(model.predict([[1.8]]))