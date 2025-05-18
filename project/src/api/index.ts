import { Company, CompanyFormData } from '../types';

const API_URL = 'http://localhost:8000';

export async function fetchCompanies(): Promise<Company[]> {
  const response = await fetch(`${API_URL}/companies`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }
  
  return response.json();
}

export async function createCompany(companyData: CompanyFormData): Promise<Company> {
  const response = await fetch(`${API_URL}/companies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(companyData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create company');
  }
  
  return response.json();
}

export async function deleteCompany(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/companies/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete company');
  }
}