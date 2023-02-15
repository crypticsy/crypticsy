# import relevant libraries
import pandas as pd

import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

"""
Script that organizes the provided certificates based on the issuer and name of the certificate, and finally created the README.md file
"""

df = pd.read_csv('certificates.csv')
df.sort_values(by=['issued_by', 'name'], inplace=True)
df.issued_by = df.issued_by.str.title().str.strip()
df.name = df.name.str.strip()
df.credential_url = df.credential_url.str.strip()

df.to_csv('certificates.csv', index=False)

print("--- Certificates have been organized ---")

df_output = df.copy()
df_output['issued_date'] = pd.to_datetime(df['issued_date'], format="%d/%m/%Y").dt.strftime("%B %d, %Y")
df_output.expiry_date = df_output.expiry_date.fillna('NA')
df_output.credential_url = df_output.credential_url.apply(lambda x: "[Link]({})".format(x))

output = ["| " for _ in range(df_output.shape[0] + 2)]

for col, label in [
    ('name', 'Name'),
    ('issued_by', 'Issuing Organization'),
    ('issued_date', 'Issue date'),
    ('expiry_date','Expiry date'),
    ('credential_url', 'Credential URL')
]:
    maximum_length = max(len(label), df_output[col].str.len().max())
    
    output[0] += str.ljust(label, maximum_length) + " | "
    output[1] += "-" * maximum_length +  " | "
    
    for n, val in enumerate(df_output[col].values):
        output[n+2] += str.ljust(val, maximum_length) + " | "


with open("README.md", 'w') as file:
    file.writelines("# Certifications\n\n## Completed Courses\n\n")
    file.writelines("\n".join(output))
    # to make the links open a new tab
    file.writelines("\n\n<base target='_blank'>")

print("--- New Certificates generated ---")