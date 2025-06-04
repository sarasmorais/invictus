import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Phone, Mail, MapPin, Check, Loader, MapPin } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'basic',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'basic',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Ocorreu um erro. Tente novamente.' });
    } finally {
      setSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedValue }));
    
    // Clear error when user types
    if (errors.phone) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding bg-invictus-black text-white">
      <div className="container-custom">
        <div className={`fade-in ${inView ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em contato</h2>
              <p className="text-lg text-gray-300 mb-8">
                Estamos prontos para ajudar você a iniciar sua jornada rumo à fluência em inglês. 
                Preencha o formulário ou entre em contato diretamente pelos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-invictus-yellow p-3 rounded-full mr-4">
                    <Phone size={24} className="text-invictus-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Telefone</h3>
                    <p className="text-gray-300">(11) 3456-7890</p>
                    <p className="text-gray-300">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-invictus-yellow p-3 rounded-full mr-4">
                    <Mail size={24} className="text-invictus-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                    <p className="text-gray-300">contato@invictusidiomas.com.br</p>
                    <p className="text-gray-300">suporte@invictusidiomas.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-invictus-yellow p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-invictus-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Endereço</h3>
                    <p className="text-gray-300">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-xl mb-4">Horário de Atendimento</h3>
                <p className="text-gray-300">Segunda a Sexta: 8h às 20h</p>
                <p className="text-gray-300">Sábado: 9h às 15h</p>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div>
              {submitted ? (
                <div className="bg-green-800 rounded-xl p-8 text-center">
                  <div className="bg-green-700 p-4 rounded-full inline-block mb-4">
                    <Check size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                  <p className="text-lg mb-6">
                    Agradecemos seu interesse. Um de nossos consultores entrará em contato em 
                    breve para agendar sua aula experimental.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <div className="bg-invictus-dark-gray rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">Agende uma Aula Grátis</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md bg-gray-700 text-white border ${
                          errors.name ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="Seu nome completo"
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-md bg-gray-700 text-white border ${
                          errors.email ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="seu.email@exemplo.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Telefone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full px-4 py-3 rounded-md bg-gray-700 text-white border ${
                          errors.phone ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="interest" className="block text-sm font-medium mb-1">
                        Curso de Interesse
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600"
                      >
                        <option value="basic">Inglês Básico</option>
                        <option value="intermediate">Inglês Intermediário</option>
                        <option value="advanced">Inglês Avançado</option>
                        <option value="business">Business English</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 resize-none"
                        placeholder="Conte-nos sobre seus objetivos com o inglês..."
                      ></textarea>
                    </div>
                    
                    {errors.submit && (
                      <div className="mb-4 p-3 bg-red-900 rounded-md text-center">
                        {errors.submit}
                      </div>
                    )}
                    
                    <button 
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {submitting ? (
                        <>
                          <Loader size={20} className="animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Agendar Aula Grátis
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;