import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: "#FFC107",
    marginBottom: 10,
  },

  statusConfirmada: {
    backgroundColor: "#4CAF50",
  },

  statusCancelada: {
    backgroundColor: "#F44336",
  },

  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

  secao: {
    marginBottom: 15,
  },

  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },

  valor: {
    fontSize: 15,
  },

  info: {
    color: "#555",
  },

  observacoes: {
    marginTop: 5,
    fontStyle: "italic",
  },

  acoes: {
    marginTop: 10,
  },

  botaoContainer: {
    marginBottom: 8,
  },

  mensagem: {
    padding: 10,
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
  },

  mensagemCancelada: {
    padding: 10,
    backgroundColor: "#FFEBEE",
    borderRadius: 8,
  },

  mensagemTexto: {
    fontWeight: "bold",
  },
});